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
   let res= new Set();
   let st=new Set();

   for(let num of nums){
    let complement = target-num;
    if(st.has(complement)){
        const pair = [Math.min(complement,num),Math.max(complement,num)];
        res.add(pair.toString());
        // converting pair(which are arrays) to string :-
        // because of how set works with 
//   Eg:-      const s = new Set();

// s.add([2, 6]);
// s.add([2, 6]);

// console.log(s.size); // 2 ❌
//     }

// Arrays are objects

// Objects are compared by reference, not by value
    
   }
   st.add(num);
}

   return Array.from(res).map(pair=>pair.split(',').map(Number));
}

console.log("two sum: ",twoSum([1, 2, 3, 4, 5, 6, 7], 8));

// Q 11) Given a sentence, check weather it is a palindrome after removing spaces and punctuation

function isPalindrome(sentence){
    let left=0, right=sentence.length -1;
    while(left<right){
        while(left<right && !isAlphaNumeric(sentence[left])){
            left++;
        }
        while(left<right && !isAlphaNumeric(sentence[right])){
            right--;
        }
        if(sentence[left].toLowerCase()!== sentence[right].toLowerCase()){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function isAlphaNumeric(char){
  
    return /^[a-z0-9]$/i.test(char);
}



console.log("isPalindrome: ",isPalindrome("A man, a plan, a canal: Panama"));

// Given an array, return true if it contains any duplicate numbers.
function duplicate1(arr){
    let st = new Set();
    for(let a of arr){
        if(st.has(a)){
         return true;
        }
        st.add(a);
    }
    return false;
}

function duplicate2(arr){
    arr.sort((a,b)=>a-b);
    for(let i=1; i<arr.length; i++){
        if(arr[i]===arr[i-1])return true;
    }
    return true;
}
console.log("duplicate: ", duplicate2([1,2,2,5,6,7,3,1,4]));

//13) Replace every space if a string with "%20"

function replaceSpace1(s){
    return s.split(' ').join('%20');
    // str.split(' ') → splits string into array of words
}
function replaceSpace2(s){
    let res="";
    for(let ch of s){
        if(ch===' '){
            res+='%20';
        }
        else res+=ch;
    }
    return res;
}
console.log("replaceSpace :",replaceSpace2("Mr John Smith"));

// 14) Find the majority element in the array (element that appears more than half

function majorityElement1(nums){
 let n=nums.length;
 let cnt=0;
 let candidate=null;

 for(let num of nums){
    if(cnt===0){
        candidate=num;
    }
    cnt+=(candidate === num)?1:-1;
 }
 return cnt;
}

function majorityElement2(nums){
    const countMap={};
    for(let num of nums){
        countMap[num]=(countMap[num] || 0)+1; 
        if(countMap[num]>nums.length/2){
            return num;
        }
    }
}

console.log("majorityElement: ", majorityElement2([3, 3, 4, 2, 3, 3, 3]));

// Q15) Count how many times each character appears in a string and returns the frequency map
function charFreq1(s){
    let freq={};
    for(let c of s){
        if(freq[c]){
            freq[c]++;
        }
        else{
            freq[c]=1;
        }
    }
    return freq;
}

function charFreq2(s){
    const mp=new Map();
    for(let c of s){
        mp.set(c,(mp.get(c) || 0) + 1);
    }
    return mp;
}
console.log("charFreq: ", charFreq2("hello world"));

// 16)Remove all duplicates values from an array an return the cleaned version. 
function removeDup1(nums){
    let st=new Set();
    let res=[];
    for(let num of nums){
        if(!st.has(num)){
            st.add(num);
            res.push(num);
        }
        
       
    }
    return res;
}

function removeDup2(nums){
    return nums.filter((item,index)=> nums.indexOf(item)===index);
}
console.log("removeDup: ", removeDup2([1,3,6,1,2,4,3,3,8,5]))

// Q.17) Given a string,find the longest palindromic substring inside it.

// Q.18)Missing no
function missingNumber(nums){
    let n=nums.length;
    let sum1=(n*(n+1))/2;
    let sum2= nums.reduce((acc,curr)=>acc+curr, 0);
    return sum1-sum2;
}

function missingNumber2(nums){
    let n=nums.length;
    let xorr=0;
    for(let i=0; i<=n; i++){
        xorr ^=i;
    }
    for(let num of nums){
        xorr ^=num;
    }
    return xorr;
}
console.log("missingNumber: ",missingNumber2([3,0,1]));

// Q19) check weather 2 string becomes = after processing word order intact.

// Q21) Reverse each word in a string
function reverseWords(str){
    return str
    .split(' ')
    .map(word=>word.split('').reverse().join(''))
    .join(' ');
}

console.log("reverseWords: ", reverseWords("I love coding"));

// Q 20) Merge 2 sorted array into a single array
function merge(nums1,nums2){
    let res=[];
    let i=0,j=0;
    while(i<nums1.length && j<nums2.length){
        if(nums1[i]<nums2[j]){
            res.push(nums1[i]);
            i++;
        }
        else{
            res.push(nums2[j]);
            j++;
        }
    }

    while(i<nums1.length){
        res.push(nums1[i]);
        i++;
    }
    while(j<nums2.length){
        res.push(nums2[j]);
        j++;
    }
    return res;
}

console.log("merge: ", merge([1,3,5],[2,4,6]));

// Q22) Smallest value in array
function smallest(nums){
    let mini=Infinity;
    for(let num of nums){
        if(num<mini){
            mini=num;
        }
    }
    return mini;
}
console.log("smallest: ",smallest([6,7,3,9,6,4]));

// Q22 follow up (Smallest value in rotated sorted array ):-
// [4,5,6,1,2,3]

function smallest_in_rotate(nums){
    left =0, right=nums.length-1;
    while(left<right){
        let mid = Math.floor((left + right)/2);

        if(nums[mid]>nums[right]){
            left=mid+1;
        }
        else right=mid;
    }
    return nums[left];
}

console.log("smallest in rotated sorted array: ", smallest_in_rotate([4, 5, 6, 1, 2, 3]));

// Q 23) Remove the vowels and return the modified string

function removeVowel(s){
    let res="";
    let vowels= "aeiouAEIOU";
    for(let c of s){
        if(!vowels.includes(c)){
            res+=c;
        }
    }
    return res;
}
function removeVowel2(str){
    return str.replace(/[aeiouAEIOU]/g,"");
}

console.log("removeVowels: ", removeVowel2("hello world"));

