<?php

class MemberModel extends CI_Model {


    function registerUser($register) {
        $json_reg = $register; // json_decode($register);
        if(!$this->userExists($json_reg['username'],$json_reg['email'])){

            $qr = 'INSERT INTO users (username, password, email) VALUES ("' . $json_reg['username'] . '", "' . MD5($json_reg['password']) . '", "' . $json_reg['email'] . '")';
            $rs = $this->db->query($qr);

        //this is the same as inser_id in php
            $id = $this->db->insert_id();

            if ($rs) {
                return $this->getProfile($id);
            } else {
                return http_response_code(409);
            }
        }else{
            return json_encode(array('username_exist' => ($this->usernameExists($json_reg['username']) ? 1 : 0), 'email_exist' => ($this->userEmailExists($json_reg['email']) ? 1 : 0) ) );         
        }

    }

    function loginUser($user) {
        $json_user = $user; //json_decode($user);
        $query = "SELECT id FROM users WHERE username = '" . $json_user['username'] . "' AND password = '" . MD5($json_user['password']) . "'";
        $rs = $this->db->query($query);
        $id = $rs->row();
        if ($id) {
            return $this->getProfile($id->id);
        }else{
            return false;
        }
    } 

    public function getData($returnNum) {
        $query = 'SELECT p.id "id", p.content "post", p.create_time "time", u.username "user", mc.colour "colour" FROM posts p, users u, mood_colours mc WHERE p.users_id = u.id AND p.mood_colours_id = mc.id ORDER BY p.create_time DESC LIMIT ' . $returnNum;
        $rs = $this->db->query($query); //gets the data from the table
        return json_encode($rs->result_array());
    }

    public function updateProfile($user) {

        $query = "UPDATE users SET photo_url='" . $user['photo_url'] . "', dob='" . 
        $user['dob'] ."' ,description='" . addslashes($user['description']) . "',gender='" . $user['gender'] .
        "',status='" . addslashes($user['description']) . "',country='" . $user['country'] . "',region='" .
        $user['region'] . "',city='" . $user['city'] . "' WHERE username = '" . $user['username'] . "'";
        //,mood_colours_id=" . $user['colour'] . "
        
        if($this->usernameExists($user['username'])){
            return json_encode('{"result" : " ' . $rs = $this->db->query($query) . '"}');
        }else{
            return json_encode('{"result" : "0"}');
        }
        
    }

    private function getProfile($id) {
        $qry = 'SELECT id, username, dob, description, gender, status, country, region, city,zip_code, photo_url FROM users WHERE id = ' . $id;
        $userInfo = $this->db->query($qry);
        $user = $userInfo->result_array();

        return json_encode($user, JSON_UNESCAPED_UNICODE);
    }
    

    public function usernameExists($username){
        $qry = "SELECT id FROM users WHERE username = '" . $username . "'";
        $id = $this->db->query($qry);
        $row = $id->result_array();
        if(count($row) > 0){
            return true;    
        }else {
            return false;
        }
    }

    public function userEmailExists($email){
        $qry = "SELECT id FROM users WHERE email = '" . $email . "'";
        $id = $this->db->query($qry);
        $row = $id->result_array();
        if(count($row) > 0){
            return true;    
        }else {
            return false;
        }
        
    }

    public function userExists($username, $email){
        if($this->usernameExists($username) || $this->userEmailExists($email)){
            return true;
        }else{
            return false;
        }
    }

}