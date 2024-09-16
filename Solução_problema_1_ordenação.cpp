#include <algorithm>
#include <bits/stdc++.h>
#include <cmath>
#include <iterator>
#include <math.h>
using namespace std;
#define DBG(x) cout << "[" << #x << "]: " << x << endl
#define F(x) std::fixed << std::setprecision(1) << (x)
#define ll long long
#define pii pair<int, int>
#define pll pair<long long, long long>
#define vi vector<int>
#define vll vector<long long>
#define mii map<int, int>
#define si set<int>
#define sc set<char>

int main()
{
    ll N;
    cin >> N;
    vll V;

    ll i = N;

    while (i > 0)
    {
        ll x;
        cin >> x; 

        V.push_back(x);
        i--;
    }

    sort(V.begin(), V.end());

    for (ll j = 0; j < V.size(); j++) {
        cout << V[j] << " ";
    }
    cout << endl;

}