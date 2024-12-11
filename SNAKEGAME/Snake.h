#ifndef SNAKE_H
#define SNAKE_H

#include <vector>
#include <set>

using namespace std;

enum eDirection { STOP = 0, LEFT, RIGHT, UP, DOWN };

struct SnakeSegment
{
    int x;
    int y;
    eDirection dir;
};

class Apple;

class Snake
{
public:
    vector<SnakeSegment> segments;

    void CreateSnake(int CENTER_FIELD_WIDTH, int CENTER_FIELD_HEIGHT, int HEAD_SNAKE);
    void SnakeInField(vector<vector<char>>& field, char HEAD_SNAKE_CHAR, char TAIL_SNAKE_CHAR, int HEAD_SNAKE);
    void DirectionSnake(char newDirection, const set<char>& LEFT_DIRECTION, const set<char>& RIGHT_DIRECTION,
        const set<char>& UP_DIRECTION, const set<char>& DOWN_DIRECTION,
        const set<char>& END_DIRECTION, bool& gameOver, int HEAD_SNAKE);
    void MoveSnake(char newDirection, int HEAD_SNAKE);
    bool SnakeEatApple(const Apple& apple, int HEAD_SNAKE);
    void GrowthSnake();
};

#endif 