# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

test_post = Post.new(venue:"university of mimai",city: "miami",time: Time.now,description: "hanging with some buds who wants to party we have ciroc!")
test_post.save
