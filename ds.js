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

// Q4)Given an array of numbers, move all 0's to the end while keeping non-0 values
// in the same relative order

// #include <iostream>
// #include <bits/stdc++.h>
// using namespace std;
// void moveZeros(vector<int>&nums){
//     int j=0, n=nums.size();
//     for(int i=0; i<n; i++){
//         if(nums[i]!=0){
//             swap(nums[i],nums[j]);
//             j++;
//         }
//     }
// }

// int main() {
//     vector<int>nums={0,1,0,3,12};
    
//     moveZeros(nums);
//     for(auto it: nums){
//         cout<<it<<" ";
//     }
//     return 0;
// }

function moveZeros(nums){
    let j=0, n=nums.length;
    for(let i=0; i<n; i++){
        if(nums[i]!=0){
            [nums[i],nums[j]]=[nums[j], nums[i]];
            j++;
        }
    }
    return nums;
}


console.log(moveZeros([0,1,0,3,12]));

// Q5.Determine whether two strings are anagrams by companring character frequency

// #include <iostream>
// #include <bits/stdc++.h>
// using namespace std;
// bool isAnagram(string a, string b){
//     if(a.length()!=b.length())return false;
//     vector<int>freq(26,0);
//     for(int i=0; i<a.length(); i++){
//         freq[a[i]-'a']++;
//         freq[b[i]-'a']--;
//     }
//     for(auto it: freq){
//         if(it!=0)return false;
//     }
//     return true;
// }
// int main() {
//     string a="car";
//     string b="rat";
//     cout<<isAnagram(a,b);
//     return 0;
// }

function isAnagram(s,t){
    if(s.length != t.length)return false;
    const freq= new Array(26).fill(0);
    for(let i=0; i<s.length; i++){
        freq[s.charCodeAt(i)-97]++;
        freq[t.charCodeAt(i)-97]--;
    }
    for(let count of freq){
        if(count !== 0){
            return false;
        }
    }
    return true;
}

console.log("isAnagram: ",isAnagram("listen","silent"));

// Q6) Given the array of integer return the index of the second highest number

// int f(vector<int>&v){
//     int n=v.size();
//     int maxi=INT_MIN;
//     int sec_maxi=INT_MIN;
//     int ans=-1;
//     for(int i=0; i<n; i++){
//         if(v[i]>maxi){
//             maxi=v[i];
//         }
//     }
    
//     for(int i=0; i<n; i++){
//         if(v[i]!=maxi && v[i]>sec_maxi)ans=i;
//     }
//     return ans;
// }

function f(v){
    let maxi=-Infinity;
    let sec_max=-Infinity;

    let index=-1;
    let n=v.length;
    for(let i=0; i<n; i++){
        if(v[i]>maxi){
            maxi=v[i];
        }
        else if(v[i] !== maxi && v[i]>sec_max){
            index=i;
        }
    }
    return index;
}
console.log("sec_max: ",f([1,2,3,4,5,23,10]));

// Q7) Remove duplicate character from a string while preserving the order of first 
// appearacne

// string f(string s){
//     unordered_set<char>st;
//     string res="";
//     for(int i=0; i<s.length(); i++){
//         if(st.find(s[i]) == st.end()){
//             st.insert(s[i]);
//             res+=s[i];
//         }
//     }
//     return res;
// }

function f(s){
    let res="";
    let st =new Set();
    for(let a of s){
        if(!st.has(a)){
            st.add(a);
            res+=a;
        }
    }
    return res;
}

console.log("remove_duplicate: ", f("programming"));

// Q8)Return the maximum sum of any contiguous subarray

function f(a){
    let maxi=-Infinity;
    let currSum=0;
    for(let i=0; i<a.length; i++){
        currSum+=a[i];
        maxi=Math.max(maxi,currSum);
    }
    return maxi;
}
console.log("max_sum: ", f([1,2,3,4,5]));

// Q9) Reverse the order of words in a sentence without using built-in split()
function r(s){
    let n=s.length;
   
    let res="";
    for(let i=n-1; i>=0; i--){
         let word="";
    while(i>=0 && s[i]===' ')i--;
    while(i>=0 && s[i]!==' '){
        word= s[i]+word;
        i--;
    }
    

   if(word.length>0){
    if(res.length>0){
        res+=" ";
    }
    res+=word;
   }
}
   return res;
}
console.log("reverse string order: ", r("I love coding!"));

// Q10) From an array of integers, return all unique pairs that sum to a target value.

// vector<vector<int>> twoSumPairs(vector<int>& nums, int target) {
//     unordered_set<int> seen;
//     set<pair<int,int>> result; // ensures uniqueness

//     for (int num : nums) {
//         int complement = target - num;

//         if (seen.count(complement)) {
//             int a = min(num, complement);
//             int b = max(num, complement);
//             result.insert({a, b});
//         }
//         seen.insert(num);
//     }

//     vector<vector<int>> ans;
//     for (auto &p : result) {
//         ans.push_back({p.first, p.second});
//     }

//     return ans;
// }

function twoSum(nums,target){
    let st = new Set();
    let  res= new Set();

    for(let num of nums){

        if(st.has(num)){
            
        }
        st.add(num);
    }
}

console.log(twoSum([1, 2, 3, 4, 5, 6, 7], 8));