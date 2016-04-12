<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Member extends CI_Controller {

    function __construct() {
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        $method = $_SERVER['REQUEST_METHOD'];
        if($method == "OPTIONS") {
          die();
      }
      parent::__construct();
      $this->load->model('MemberModel'); //Loads the model
  }
  
  public function index() {
        //$this->load->model('MemberModel'); //Loads the model
        $data['data'] = $this->MemberModel->getData(3); //executes function from model returns rexcord set
        sleep(2);
        $this->load->view('MemberView', $data); //directs and passes data from the databse to the view
    }

    public function register() {
        $user = json_decode(file_get_contents('php://input'), true)['user']; //$this->input->post('user');
        //$mem = json_decode($member);
        //$this->load->model('MemberModel'); //Loads the model
        $data['data'] = $this->MemberModel->registerUser($user); //executes function from model returns rexcord set
        $this->load->view('MemberView', $data); //directs and //passes data from the databse to the view
    }

    public function login() {
        $user = json_decode(file_get_contents('php://input'), true)['user']; //$this->input->post('user');
        //$this->load->model('MemberModel'); //Loads the model
        $data['data'] = $this->MemberModel->loginUser($user); //executes function from model returns rexcord set
        $this->load->view('MemberView', $data); //directs and passes data from the databse to the view
    }

    public function updateProfile() {
        $user = json_decode(file_get_contents('php://input'), true)['user']; //$this->input->post('user');
        //$this->load->model('MemberModel'); //Loads the model        
        $data['data'] = $this->MemberModel->updateProfile($user); //executes function from model returns rexcord set
        $this->load->view('MemberView', $data); //directs and passes data from the databse to the view
    }
    public function checkUsername(){
        $user = json_decode(file_get_contents('php://input'), true)['user'];
        $data['data'] = $this->MemberModel->usernameExists($user['username']);
        $this->load->view('MemberView', $data); //directs and passes data from the databse to the view
    }

    public function checkEmail(){
        $user = json_decode(file_get_contents('php://input'), true)['user'];
        $data['data'] = $this->MemberModel->useremailExists($user['email']);
        $this->load->view('MemberView', $data); //directs and passes data from the databse to the view
    }
    

}