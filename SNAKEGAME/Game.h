#ifndef GAME_H
#define GAME_H

#include <set>
#include <string>
#include "Apple.h"
#include "Snake.h"
#include "Field.h"

using namespace std;

class Game
{
public:
    void Run();
private:
    
    bool gameOver;
    const int WIDTH = 9;
    const int HEIGHT = 9;
    const int SPEED = 200;
    const char HEAD_SNAKE_CHAR = 'O';
    const int HEAD_SNAKE = 0;
    const char TAIL_SNAKE_CHAR = 'o';
    const char FIELD_BORDER_CHAR = '#';
    const char FIELD_CHAR = ' ';
    const char APPLE_CHAR = '@';
    const int CENTER_FIELD_WIDTH = (WIDTH + 2) / 2 - 1;
    const int CENTER_FIELD_HEIGHT = (HEIGHT + 2) / 2 - 1;
    const string GAME_OVER = "GAME OVER";
    const set<char> LEFT_DIRECTION{ 'a','A' };
    const set<char> RIGHT_DIRECTION{ 'd','D' };
    const set<char> UP_DIRECTION{ 'w','W' };
    const set<char> DOWN_DIRECTION{ 's','S' };
    const set<char> END_DIRECTION{ 'x','X' };

    Field field;
    Snake snake;
    Apple apple;
    char direction;

    bool IsKeyPressed(char key, const set<char>& direction);
    bool CheckGameConditions();
    void DrawGameField();
};

#endif 