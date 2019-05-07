# Arrays

Array assignement

```ruby
a=["Hello", "this", "is", "an", "array"]

a=%w(Hello this is an array) #Better
```

Array join

```ruby
a=[1, 2, 3]
puts a.join("+")

a=[1, 2, 3]
puts a*?+ #Better
```

Try to set your array as `$*`

```ruby
a=[]
6.times do |i|
 a << i
end

6.times do |i|
 $* << i
end
```

Array shift

```ruby
a=[1,2,3]
a.shift

a=[1,2,3]
a[1..-1]  # Better
```

Change compact

```ruby
a=[1, nil, 2, nil, nil, 3]
a.compact

a-[nil] #Better
```

Uniq

```ruby
a.uniq

a|[]
```
