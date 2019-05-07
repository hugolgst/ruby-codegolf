# Strings

String match

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

String repetition

```ruby
6.times do
 print "Hello"
end

print "Hello"*6 #Better
```

Single char

```ruby
puts "A"

puts ?A #Better
```

Char ascii

```ruby
puts 70.chr

putc 70 #Better
```

\n shortcut

```ruby
a=gets.split "\n"

a=gets.split $/ #Better
```
