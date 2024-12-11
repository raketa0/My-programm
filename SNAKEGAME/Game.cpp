#include "Game.h"
#include <iostream>
#include <conio.h>
#include <windows.h>

using namespace std;

void Game::Run()
{
    gameOver = false;

    field.FillField(WIDTH, HEIGHT, FIELD_BORDER_CHAR, FIELD_CHAR);

    snake.CreateSnake(CENTER_FIELD_WIDTH, CENTER_FIELD_HEIGHT, HEAD_SNAKE);
    snake.SnakeInField(field.field, HEAD_SNAKE_CHAR, TAIL_SNAKE_CHAR, HEAD_SNAKE);

    apple.CreateApple(snake.segments, WIDTH, HEIGHT);
    apple.AppleInField(field.field, APPLE_CHAR);
    field.PrintField();
    direction = STOP;
    while (!gameOver)
    {
        Sleep(400);
        if (_kbhit())
        {
            direction = _getch();
            snake.DirectionSnake(direction, LEFT_DIRECTION, RIGHT_DIRECTION, UP_DIRECTION, DOWN_DIRECTION, END_DIRECTION, gameOver, HEAD_SNAKE);
        }
        if (snake.SnakeEatApple(apple, HEAD_SNAKE))
        {
            snake.GrowthSnake();
            apple.CreateApple(snake.segments, WIDTH, HEIGHT);
            apple.AppleInField(field.field, APPLE_CHAR);
        }
        snake.MoveSnake(direction, HEAD_SNAKE);
        DrawGameField();
    }
}

bool Game::IsKeyPressed(char key, const set<char>& direction)
{
    return direction.find(key) != direction.end();
}

bool Game::CheckGameConditions()
{
    if (snake.segments[HEAD_SNAKE].x <= 0 || snake.segments[HEAD_SNAKE].y <= 0 ||
        snake.segments[HEAD_SNAKE].x > WIDTH || snake.segments[HEAD_SNAKE].y > HEIGHT)
    {
        field.field[snake.segments[HEAD_SNAKE].y][snake.segments[HEAD_SNAKE].x] = FIELD_BORDER_CHAR;
        return true;
    }

    for (int i = 1; i < snake.segments.size() - 1; i++)
    {
        if (snake.segments[HEAD_SNAKE].x == snake.segments[i].x && snake.segments[HEAD_SNAKE].y == snake.segments[i].y)
        {
            return true;
        }
    }
    return false;
}

void Game::DrawGameField()
{
    for (int y = 1; y <= HEIGHT; y++)
    {
        for (int x = 1; x <= WIDTH; x++)
        {
            field.field[y][x] = FIELD_CHAR;
        }
    }
    if (!CheckGameConditions())
    {
        field.AppleInField(apple, APPLE_CHAR);
        field.SnakeInField(snake, HEAD_SNAKE_CHAR, TAIL_SNAKE_CHAR, HEAD_SNAKE);
    }
    else
    {
        field.PrintEndGame(GAME_OVER, CENTER_FIELD_WIDTH, CENTER_FIELD_HEIGHT);
        gameOver = true;
    }

    CONSOLE_SCREEN_BUFFER_INFO csbi;
    GetConsoleScreenBufferInfo(GetStdHandle(STD_OUTPUT_HANDLE), &csbi);
    COORD newCursorPosition = { 0, 0 };
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), newCursorPosition);
    HANDLE hStd;
    hStd = GetStdHandle(STD_OUTPUT_HANDLE);
    for (int y = 0; y <= HEIGHT + 1; y++)
    {
        for (int x = 0; x <= WIDTH + 1; x++)
        {
            /*if (field.field[y][x] == APPLE_CHAR) {
                SetConsoleTextAttribute(hStd, BACKGROUND_RED | FOREGROUND_RED);
            }
            else if (field.field[y][x] == HEAD_SNAKE_CHAR) {
                SetConsoleTextAttribute(hStd, BACKGROUND_BLUE | FOREGROUND_BLUE);
            }
            else if (field.field[y][x] == TAIL_SNAKE_CHAR)
            {
                SetConsoleTextAttribute(hStd, BACKGROUND_BLUE | FOREGROUND_BLUE);
            }
            else if ((field.field[y][x] == FIELD_BORDER_CHAR)) {
                SetConsoleTextAttribute(hStd, BACKGROUND_GREEN | FOREGROUND_GREEN);
            }
            else
            {
               
            }*/
            cout << field.field[y][x] << FIELD_CHAR;
        }
        cout << endl;
    }
}