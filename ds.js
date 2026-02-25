// #include <iostream>
// #include <bits/stdc++.h>
// using namespace std;
// char f(string s){
//     unordered_map<char,int>mp;
//     for(char ch : s){
//         mp[ch]++;
//     }
//     for(char ch: s){
//         if(mp[ch] == 1){
//             return ch;
//         }
//     }
//     return '\0';
// }
// int main() {
    
//     string str="samreens";
//     cout<<f(str);
//     return 0;
// }
  

// Q1) Return the first character that does not repeat anywhere else in the string
function firstChar1(s){
    const freq={};
    for(let char of s){
        freq[char]=(freq[char]||0)+1;
    }
    for(let char of s){
        if(freq[char]==1){
            return char;
        }
    }
    return null;
}

function firstChar2(s){
    const freq = new Map();

    //count frequency
    for(let char of s){
        if(freq.has(char)){
            freq.set(char, freq.get(char)+1);
        }
        else{
            freq.set(char, 1);
        }
    }
    //find first non-repeating
    for(let char of s){
        if(freq.get(char)==1){
            return char;
        }
    }
    
    return null;
}
console.log(firstChar2("samreens"));

// Q2) Rotate an array to the right by k positions without using any extra array

// #include <iostream>
// #include <bits/stdc++.h>
// using namespace std;
// void rotate(vector<int>&nums, int k){
//     int n=nums.size();
//     k=k%n;
//     reverse(nums.begin(),nums.end());
//     reverse(nums.begin(),nums.begin()+k);
//     reverse(nums.begin()+k,nums.end());
// }
// int main() {
    
//     vector<int>nums={1,2,3,4,5,6,7};
//     int k=3;
//     rotate(nums,k);
//     for(int x: nums){
//         cout<<x<<" ";
//     }
//     return 0;
// }

function rotate(nums, k){
    let n=arr.length;
    k=k%n;

    //function to reverse any part of 
    function reverse(start, end){
        // destructring array
        while(start<end){
        [nums[start],nums[end]]=[nums[end],nums[start]];
        start++;
        end--;
        }
    }

    reverse(0,n-1);
    reverse(0,k-1);
    reverse(k,n-1);
}

let arr=[1,2,3,4,5,6,7];
rotate(arr,3);
console.log(arr);

//Q3) Find the longest substring in a string that contains no repeating characters.

// #include <iostream>
// #include <bits/stdc++.h>
// using namespace std;
// int lengthofLongestSubstring(string s){
//     unordered_map<char,int>mp;
//     int n=s.length();
//     int left=0;
//     int maxlen=0;
//     for(int right=0; right<n; right++){
//         mp[s[right]]++;
        
//         if(mp[s[right]]>1){
//             mp[s[left]]--;
//             left++;
//         }
//         maxlen=max(maxlen,right-left+1);
//     }
//     return maxlen;
// }
// int main() {
//     string s= "abcabcdb";
//     cout<<lengthofLongestSubstring(s);
   
//     return 0;
// }
function lengthofLongestSubstring(s){
    let st = new Set();
    let left=0;
    let n=s.length;
    let maxlen=0;

    for(let right=0; right<n; right++){
        while(st.has(s[right])){
            st.delete(s[left]);
            left++;
        }
        st.add(s[right]);
        maxlen=Math.max(maxlen,right-left+1);
    }
    return maxlen;
}
console.log(lengthofLongestSubstring("abcabcbb"));