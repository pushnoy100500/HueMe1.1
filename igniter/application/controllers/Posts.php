<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Posts extends CI_Controller{

	public function __construct(){

		header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    $method = $_SERVER['REQUEST_METHOD'];
    if($method == "OPTIONS") {
      die();
    }
    parent::__construct();
      $this->load->model('PostsModel'); //Loads the model
    }


    public function post() {
        $post = json_decode(file_get_contents('php://input'), true)['post']; //$this->input->post('user');
        //$this->load->model('MemberModel'); //Loads the model
        $data['data'] = $this->PostsModel->insertPosts($post); //executes function from model returns rexcord set
        $this->load->view('PostsView', $data); //directs and passes data from the databse to the view
      }

      public function comment() {
        //add comment to post
       $comment = json_decode(file_get_contents('php://input'), true)['comment'];
       $data['data'] = $this->PostsModel->insertComment($comment);
       $this->load->view('PostsView', $data);
     }

     public function getAllPosts(){
      $data['data'] = $this->PostsModel->getAllPosts();
       $this->load->view('PostsView', $data);
     }

     
     public function getAllPostsByUser($id){
		//qury all users posts
       //$user = $this->input->get('id');
       $data['data'] = $this->PostsModel->getPostsByUserId($id);
       $this->load->view('PostsView', $data);

     }
     public function getAllPostsByColour($colourId){
       //$post = json_decode(file_get_contents('php://input'), true)['post'];
       $data['data'] = $this->PostsModel->getPostsByColour($colourId);
       $this->load->view('PostsView', $data);

     }

     public function getPostsByTen($startIndex){
    //get 10 posts at a time startoing from the index recieved
      //$post = json_decode(file_get_contents('php://input'), true)['post'];
      $data['data'] = $this->PostsModel->getPostsByTen($startIndex);
      $this->load->view('PostsView', $data);
    }

    public function getComments($postId) {
      $data['data'] = $this->PostsModel->getCommentsFor($postId);
      $this->load->view('PostsView', $data);
    }

    public function getRecent ($postNum) {
      $data['data'] = $this->PostsModel->getPosts($postNum);
      $this->load->view('PostsView', $data);

    }
    public function getCommentsByPostId($id){
      $data['data'] = $this->PostsModel->getCommentsFor($id);
      $this->load->view('PostsView', $data);
    }

  }