# Others

Shortcut for print

```ruby
print "hello"

$><<"hello" #Better
```

Think to remove `do end` block

```ruby
6.times do |i|
 puts i
end

6.times{|i|puts i} #Better
```

You can change `each` to `map`

```ruby
(0..9).to_a.each do
 puts "Hello"
end

(0..9).to_a.map do
 puts "Hello"             #Better
end
```

You can replace your last gets by `$_`

```ruby
a=gets
puts a

gets
puts $_
```

Methods

```ruby
def a n
n*n
end

a=->n{n*n} # Better
```

Write n times w

```ruby
6.times do
 puts "Hello world"
end

puts ["Hello world"] * 6   #Better
```
