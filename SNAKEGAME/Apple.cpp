#include "Apple.h"
#include "Snake.h"  

using namespace std;

void Apple::CreateApple(const vector<SnakeSegment>& snake, int WIDTH, int HEIGHT)
{
    bool validPosition;
    do {
        validPosition = true;
        x = rand() % (WIDTH - 2) + 2;
        y = rand() % (HEIGHT - 2) + 2;
        for (const auto& segment : snake) {
            if (segment.x == x && segment.y == y) {
                validPosition = false;
                break;
            }
        }
    } while (!validPosition);
}

void Apple::AppleInField(vector<vector<char>>& field, char APPLE_CHAR)
{
    field[y][x] = APPLE_CHAR;
}