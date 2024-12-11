#include "Snake.h"
#include "Apple.h" 

using namespace std;

void Snake::CreateSnake(int CENTER_FIELD_WIDTH, int CENTER_FIELD_HEIGHT, int HEAD_SNAKE)
{
    SnakeSegment head;
    head.x = CENTER_FIELD_WIDTH;
    head.y = CENTER_FIELD_HEIGHT;
    head.dir = STOP;
    segments.push_back(head);
    SnakeSegment tail;
    tail.x = head.x;
    tail.y = head.y + 1;
    tail.dir = STOP;
    segments.push_back(tail);
}

void Snake::SnakeInField(vector<vector<char>>& field, char HEAD_SNAKE_CHAR, char TAIL_SNAKE_CHAR, int HEAD_SNAKE)
{
    field[segments[HEAD_SNAKE].y][segments[HEAD_SNAKE].x] = HEAD_SNAKE_CHAR;
    for (int i = 1; i < segments.size(); i++)
    {
        field[segments[i].y][segments[i].x] = TAIL_SNAKE_CHAR;
    }
}

void Snake::DirectionSnake(char newDirection, const set<char>& LEFT_DIRECTION, const set<char>& RIGHT_DIRECTION,
    const set<char>& UP_DIRECTION, const set<char>& DOWN_DIRECTION,
    const set<char>& END_DIRECTION, bool& gameOver, int HEAD_SNAKE)
{
    if (LEFT_DIRECTION.find(newDirection) != LEFT_DIRECTION.end()) {
        segments[HEAD_SNAKE].dir = LEFT;
    }
    else if (RIGHT_DIRECTION.find(newDirection) != RIGHT_DIRECTION.end()) {
        segments[HEAD_SNAKE].dir = RIGHT;
    }
    else if (UP_DIRECTION.find(newDirection) != UP_DIRECTION.end()) {
        segments[HEAD_SNAKE].dir = UP;
    }
    else if (DOWN_DIRECTION.find(newDirection) != DOWN_DIRECTION.end()) {
        segments[HEAD_SNAKE].dir = DOWN;
    }
    else if (END_DIRECTION.find(newDirection) != END_DIRECTION.end()) {
        gameOver = true;
    }
}

void Snake::MoveSnake(char newDirection, int HEAD_SNAKE)
{
    SnakeSegment newHeadSnake = segments[HEAD_SNAKE];
    switch (segments[HEAD_SNAKE].dir)
    {
    case LEFT:
        newHeadSnake.dir = LEFT;
        --newHeadSnake.x;
        break;
    case RIGHT:
        newHeadSnake.dir = RIGHT;
        ++newHeadSnake.x;
        break;
    case UP:
        newHeadSnake.dir = UP;
        --newHeadSnake.y;
        break;
    case DOWN:
        newHeadSnake.dir = DOWN;
        ++newHeadSnake.y;
        break;
    default:
        break;
    }
    segments.pop_back();
    segments.insert(segments.begin(), newHeadSnake);
}

bool Snake::SnakeEatApple(const Apple& apple, int HEAD_SNAKE)
{
    return segments[HEAD_SNAKE].x == apple.x && segments[HEAD_SNAKE].y == apple.y;
}

void Snake::GrowthSnake()
{
    SnakeSegment newTailSnake = segments.back();
    segments.push_back(newTailSnake);
}