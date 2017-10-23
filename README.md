# Introduction
Some of the best golfing tips in Ruby.
Just browse categories and find the tricks you can do to reduce your code.

# Summary
* [Objects](#objects)
  * [Variables](#variables)
  * [Strings](#strings)
  * [Arrays](#arrays)
  * [Integers](#integers)
  * [Conditions](#conditions)

----------

# Objects
## Variables
- Define variables with one letter
```ruby
sentence="This is a good sentence."
s="This is a good sentence." #Better
```

- Multiple variable assignement
```ruby
a=2017
b=50         
c="Fish"

a,b,c=2017,50,"Fish" #Better
```

- Puts variables
```ruby
a="Anana"
puts "My name is #{a}"

$a="Anana"
puts "My name is #$a" #Better
```

## Strings
- String match
```ruby
a="Hello"
if a.match /[a-zA-Z]/
 puts "It's a match!"
end

a="Hello"
if a=~/[a-zA-Z]/
 puts "It's a match!"      #Better
end
```

- String repetition
```ruby
6.times do
 print "Hello"
end

print "Hello"*6 #Better
```

- Single char
```ruby
puts "A"

puts ?A #Better
```

## Arrays

- Array assignement
```ruby
a=["Hello", "this", "is", "an", "array"]

a=%w(Hello this is an array) #Better
```

- Array join
```ruby
a=[1, 2, 3]
puts a.join("+")

a=[1, 2, 3]
puts a*?+ #Better
```

## Integers

- Number shortcut
```ruby
a=10000

a=1e4 #Better
```

- Print
```ruby
puts 547

p 547 #Better
```

## Conditions

- Condition shortcut
```ruby
a=true
if a
 puts "Yes it's true."
end

a=true
puts "Yes it's true." if a #Better

a=true
a&&puts "Yes it's true." #The best
```
