#include "Field.h"
#include <algorithm>
#include <iostream>
#include <iterator>
#include <windows.h>

using namespace std;

void Field::FillField(int WIDTH, int HEIGHT, char FIELD_BORDER_CHAR, char FIELD_CHAR)
{
    vector<char> rowField;
    for (int j = 0; j < WIDTH + 2; j++) {
        if (j == 0 || j == WIDTH + 1) {
            rowField.push_back(FIELD_BORDER_CHAR);
        }
        else {
            rowField.push_back(FIELD_CHAR);
        }
    }
    field.resize(HEIGHT + 2);
    for_each(field.begin(), field.end(), [rowField = rowField](vector<char>& i) mutable { i = rowField; });
    for (int j = 0; j < WIDTH + 2; j++) {
        field[0][j] = FIELD_BORDER_CHAR;
        field[HEIGHT + 1][j] = FIELD_BORDER_CHAR;
    }
}

void Field::PrintField()
{
    for_each(field.begin(), field.end(), [](const vector<char>& v)
        {
            copy(v.begin(), v.end(), ostream_iterator<char>(cout, " "));
            cout << endl;
        });
}

void Field::AppleInField(Apple& apple, char APPLE_CHAR)
{
    field[apple.y][apple.x] = APPLE_CHAR;
}

void Field::SnakeInField(Snake& snake, char HEAD_SNAKE_CHAR, char TAIL_SNAKE_CHAR, int HEAD_SNAKE)
{
    field[snake.segments[HEAD_SNAKE].y][snake.segments[HEAD_SNAKE].x] = HEAD_SNAKE_CHAR;
    for (int i = 1; i < snake.segments.size(); i++)
    {
        field[snake.segments[i].y][snake.segments[i].x] = TAIL_SNAKE_CHAR;
    }
}

void Field::PrintEndGame(string GAME_OVER, int CENTER_FIELD_WIDTH, int CENTER_FIELD_HEIGHT)
{
    int lenText = GAME_OVER.length();
    int lenTextPos = CENTER_FIELD_WIDTH - lenText / 2 + 1;
    for (int j = 0; j < GAME_OVER.length(); j++)
    {
        field[CENTER_FIELD_HEIGHT + 1][lenTextPos] = GAME_OVER[j];
        lenTextPos = lenTextPos + 1;
    }
}