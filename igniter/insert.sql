INSERT INTO users(username, email, password, mood_colours_id)
 VALUES ("Budah","Buddah@my20.ca","123456",1);

INSERT INTO users(username, email, password, mood_colours_id)
 VALUES ("Budah","Buddah@my20.ca","123456",1);

INSERT INTO users(username, email, password, mood_colours_id)
 VALUES ("Budah","budd@my20.ca","123456",1);

INSERT INTO users(username, email, password, mood_colours_id)
 VALUES ("Price","price@right,com","123456",2);

INSERT INTO users(username, email, password, mood_colours_id)
 VALUES ("gogo","gp@my20.ca","123456",1);

INSERT INTO mood_colours(colour) VALUE ('orange');
INSERT INTO mood_colours(colour) VALUE ('red');
INSERT INTO mood_colours(colour) VALUE ('pink');
INSERT INTO mood_colours(colour) VALUE ('green');


INSERT INTO posts(content, tags, mood_colours_id, users_id)
VALUES ('what a tangled web we weive', 'spider, snake', 4,4);


INSERT INTO posts(content, tags, mood_colours_id, users_id)
VALUES ('what a tangled web we weive', 'hack, code', 3,6);

INSERT INTO posts(content, tags, mood_colours_id, users_id)
VALUES ('reply to this', 'cat, dog', 5,3);
INSERT INTO posts(content, tags, mood_colours_id, users_id)
VALUES ('this is a really ndumb post', 'hockey, basketball', 2,4);

INSERT INTO posts(content, tags, mood_colours_id, users_id)
VALUES ('LAMP is awesome', 'computer, web development', 6,6);

INSERT INTO `comments`(`content`, `posts_id`, `users_id`)
 VALUES ("your post sucks", 3, 4);
INSERT INTO `comments`(`content`, `posts_id`, `users_id`)
 VALUES ("stop crying already", 4, 5);
INSERT INTO `comments`(`content`, `posts_id`, `users_id`)
 VALUES ("great to hear", 5, 2);
INSERT INTO `comments`(`content`, `posts_id`, `users_id`)
 VALUES ("don't know what else to put :(", 6, 4);