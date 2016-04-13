<?php

class PostsModel extends CI_Model{

	public function getAllPosts(){
        //$query = "SELECT * FROM posts  ORDER BY create_time  DESC LIMIT " . $returnNum;
		$query = 'SELECT p.id "id", p.content "post", p.create_time "time", p.tags "tags", u.username "user", u.photo_url "photo",  mc.colour "colour" FROM posts p, users u, mood_colours mc WHERE p.users_id = u.id AND p.mood_colours_id = mc.id AND p.is_active = 1 ORDER BY p.create_time DESC';
        $rs = $this->db->query($query); //gets the data from the table
        return json_encode($rs->result_array());
        //return $rs->result_array();
    }

    public function insertPosts($post){
    	//$userId = $post['userId']; //$this->getUserIdByEmail($post['email']);
		$qry = "INSERT INTO posts (users_id, mood_colours_id, tags, content) VALUES (" .
		$post['userId'] . ", " . $post['mood_colours_id'] . ", '" . addslashes($post['tags']) .  
		"', '" . addslashes($post['content']) . "')"; 
		$rtn = $this->db->query($qry);
		$id = $this->db->insert_id();
		return json_encode($id);
	}

	public function insertComment($comment){
		//$userId = $comment['userId']; //$this->getUserIdByEmail($comment['email']);
		$qry = "INSERT INTO comments (users_id, posts_id, content) VALUES (" .
		$comment['userId'] . ", " . $comment['postId'] .  ", '" . addslashes($comment['content']) . "')"; 
		$rtn = $this->db->query($qry);
		$id = $this->db->insert_id();
		return json_encode($id);
	}

	//working
	public function getPostsByColour($colourId){
		$query = 'SELECT p.id "id", p.content "post", p.tags "tags", p.create_time "time", u.photo_url "photo", u.username "user", mc.colour "colour" FROM posts p, users u, mood_colours mc WHERE p.users_id = u.id AND p.mood_colours_id = mc.id AND p.is_active = 1 AND mc.id = ' . $colourId . ' ORDER BY p.create_time DESC';
        $rs = $this->db->query($query); //gets the data from the table
        return json_encode($rs->result_array());

	}
	//working
	public function getPostsByUserId($id){
		$query = 'SELECT p.id "id", p.content "post", p.is_active "active", p.tags "tags", p.create_time "time", u.username "user", u.photo_url "photo",  mc.colour "colour" FROM posts p, users u, mood_colours mc WHERE p.users_id = u.id AND p.mood_colours_id = mc.id AND p.users_id = "' . $id . '" ORDER BY p.create_time DESC';
        $rs = $this->db->query($query); //gets the data from the table
        return json_encode($rs->result_array());
	}
	//working
	public function getPostsByTen($startIndex){
		$query = 'SELECT p.id "id", p.content "post", p.create_time "time", u.username "user", u.photo_url "photo",  mc.colour "colour" FROM posts p, users u, mood_colours mc WHERE p.users_id = u.id AND p.mood_colours_id = mc.id AND p.is_active = 1 ORDER BY p.create_time DESC LIMIT ' . $startIndex . ', 10 ';
        $rs = $this->db->query($query); //gets the data from the table
        return json_encode($rs->result_array());
	}

	//working
	public function getUserIdByEmail($email){		
		$qry = "SELECT id FROM users WHERE email = '" . $email . "'";
		$id = $this->db->query($qry);
		$row = $id->result_array();
	     return $row; //) ? "true" : "false");        
	    }

	 public function getCommentsFor($postId) {
		//$qry = 'SELECT * FROM comments WHERE posts_id = ' . $postId;
		$qry = 'SELECT c.id, c.create_time, c.content, c.is_active, u.username "user" FROM comments c, users u WHERE posts_id = ' . $postId . ' AND c.users_id = u.id AND c.is_active = 1 AND u.is_active = 1 ORDER BY c.create_time DESC';
		$comments = $this->db->query($qry);
		return json_encode($comments->result_array());
		/*
	SELECT c.id, c.create_time, c.content, c.posts_id, u.username FROM comments c INNER JOIN users u ON c.users_id = u.id WHERE c.posts_id = 5
		*/
	}
	public function getPosts($returnNum){
			//$query = "SELECT * FROM posts  ORDER BY create_time  DESC LIMIT " . $returnNum;
			$query = 'SELECT p.content "post", p.create_time "time", u.username "user", mc.id "colour", u.photo_url "photo"
								FROM posts p, users u, mood_colours mc
								WHERE p.users_id = u.id AND p.mood_colours_id = mc.id
								ORDER BY p.create_time DESC LIMIT ' . $returnNum;
			$rs = $this->db->query($query); //gets the data from the table
		 return json_encode($rs->result_array());
			//return $rs->result_array();
	}


}