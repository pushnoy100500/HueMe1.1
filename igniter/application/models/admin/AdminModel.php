<?php

class AdminModel extends CI_Model {

	public function activateUser($id){
		return $this->db->query($this->qryBuilder('users', 1, $id));
	}

	public function deactivateUser($id){
		return $this->db->query($this->qryBuilder('users', 0, $id));
	}

	public function activatePost($id){
		return $this->db->query($this->qryBuilder('posts', 1, $id));
	}

	public function deactivatePost($id){
		return $this->db->query($this->qryBuilder('posts', 0, $id));
	}

	public function activateComment($id){
		return $this->db->query($this->qryBuilder('comments', 1, $id));
	}

	public function deactivateComment($id){
		return $this->db->query($this->qryBuilder('comments', 0, $id));
	}

	public function getAllUsers(){
		$qry = "SELECT * from users";
		$rs = $this->db->query($qry);
		return $rs->result_array();
	}
	public function getAllNumericData(){
		$uqry = 'SELECT * FROM users';
		$pqry = 'SELECT * FROM posts';

		$urs = $this->db->query($uqry);
		$prs = $this->db->query($pqry);

		$data['user_count'] = $urs->num_rows();
		$data['post_count'] = $prs->num_rows();

		return $data;

	}
	//sames as the PostsModel function except it gets all posts 
	//active/inactive and receives the active property
	public function getAllPosts(){
		$query = 'SELECT p.id "id", p.is_active "active", p.content "post", p.create_time "time", p.tags "tags", u.username "user", mc.colour "colour" FROM posts p, users u, mood_colours mc WHERE p.users_id = u.id AND p.mood_colours_id = mc.id ORDER BY p.create_time DESC';
        $rs = $this->db->query($query); //gets the data from the table
        return json_encode($rs->result_array());
    }
    //smalll query builder for activating and deactovating
	private function qryBuilder($table, $is_active, $id){
		return sprintf('UPDATE %s SET is_active = %d WHERE id = %d', $table, $is_active, $id);
	}

	
}