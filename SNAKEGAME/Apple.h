#ifndef APPLE_H
#define APPLE_H

#include <vector>

using namespace std;

struct SnakeSegment;

class Apple
{
public:
    int x;
    int y;

    void CreateApple(const vector<SnakeSegment>& snake, int WIDTH, int HEIGHT);
    void AppleInField(vector<vector<char>>& field, char APPLE_CHAR);
};

#endif 