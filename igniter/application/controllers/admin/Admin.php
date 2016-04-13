<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {

	public function __construct(){
		/*header('Access-Control-Allow-Origin: *');
   	 	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
		 header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");*/
		parent::__construct();

		if($_SERVER['REQUEST_METHOD'] == 'POST'){
			
		}
		
		//$this->load->model('PostsModel');
		//$this->load->model('MemberModel'); 
		$this->load->model('admin/AdminModel');
	}

	public function index(){
		//load login page if logged in else go to dashboard
		$data['users'] = $this->AdminModel->getAllUsers();
		$data['main'] = $this->AdminModel->getAllNumericData();
		/*echo '<pre>';
		var_dump($data);
		echo '</pre>';*/
		$this->load->view('admin/AdminView', $data);

		
	}

	public function dashboard(){
		//admin dash board
	}

	public function loadPostsStats(){
		//get all posts and sort by colour and put into class
		$data['data'] = $this->AdminModel->getAllPosts();
		$this->load->view('admin/AdminView', $data);
		
	}

	public function activateMember($id){
		//$this->model->load('AdminModel');
		$data['data'] = $this->AdminModel->activateUser($id);
		$this->load->view('admin/AdminView', $data);
	}

	public function deactivateMember($id){
		//$this->model->load('AdminModel');
		$data['data'] = $this->AdminModel->deactivateUser($id);
		$this->load->view('admin/AdminView', $data);
	}

	public function deactivatePost($id){
		$data['data'] = $this->AdminModel->deactivatePost($id);
		$this->load->view('admin/AdminView', $data);
	}

	public function activatePost($id){
		$data['data'] = $this->AdminModel->activatePost($id);
		$this->load->view('admin/AdminView', $data);
	}

	public function deactivateComment($id){
		$data['data'] = $this->AdminModel->deactivateComment($id);
		$this->load->view('admin/AdminView', $data);
	}

	public function activateComment($id){
		$data['data'] = $this->AdminModel->activateComment($id);
		$this->load->view('admin/AdminView', $data);

	}

	

}