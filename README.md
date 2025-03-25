Group_by_Challenge

Description:

Write a function called groupBy that takes two parameters: an array of objects and a string that represents a property name.
The function should group the objects in the array by the value of the specified property, 
and return an object where each key is the distinct value of the specified property, 
and the value is an array of objects that have that property value.

For example, if the array of objects is:

[
{ name: ‘Tony’, age: 25, city: ‘New York’ },
{ name: ‘Ohallan’, age: 30, city: ‘Chicago’ },
{ name: ‘Manny’, age: 35, city: ‘New York’ },
{ name: ‘Dave’, age: 40, city: ‘Chicago’ }
]

and the property name is “city”, the function should return:

{
‘New York’: [
{ name: ‘Tony’, age: 25, city: ‘New York’ },
{ name: ‘Manny’, age: 35, city: ‘New York’ }
],
‘Chicago’: [
{ name: ‘Ohallan’, age: 30, city: ‘Chicago’ },
{ name: ‘Dave’, age: 40, city: ‘Chicago’ }
]
}

If the property name is “age”, the function should return:

{
25: [{ name: ‘Tony’, age: 25, city: ‘New York’ }],
30: [{ name: ‘Ohallan’, age: 30, city: ‘Chicago’ }],
35: [{ name: ‘Manny’, age: 35, city: ‘New York’ }],
40: [{ name: ‘Dave’, age: 40, city: ‘Chicago’ }]
}

This solution can be able to handle arrays of any length and objects with any number of properties.
