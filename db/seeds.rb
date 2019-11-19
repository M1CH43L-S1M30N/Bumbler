# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'
user1 = User.create(username: "toto6", password: "simeon")
post = Post.create(title: "photo2", authorId: user1.id)
file = open('https://bumbler-dev.s3.amazonaws.com/font.png')
post.photo.attach(io: file, filename: 'nVtXKzN2z4RPtP9Jm857zcn8')