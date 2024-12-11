#ifndef FIELD_H
#define FIELD_H

#include <vector>
#include <string>
#include "Apple.h"
#include "Snake.h"

using namespace std;

class Field
{
public:
    vector<vector<char>> field;

    void FillField(int WIDTH, int HEIGHT, char FIELD_BORDER_CHAR, char FIELD_CHAR);
    void PrintField();
    void AppleInField(Apple& apple, char APPLE_CHAR);
    void SnakeInField(Snake& snake, char HEAD_SNAKE_CHAR, char TAIL_SNAKE_CHAR, int HEAD_SNAKE);
    void PrintEndGame(string GAME_OVER, int CENTER_FIELD_WIDTH, int CENTER_FIELD_HEIGHT);
};

#endif 