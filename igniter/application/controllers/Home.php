<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of HomeController
 *
 * @author Antonios Abraham
 */
class Home extends CI_Controller {
    //put your code here
    public function index(){
        $this->load->model('HomeModel');//Loads the model
        $data['topPosts'] = $this->HomeModel->getData(3);//executes function from model returns rexcord set
        sleep(2);
        $this->load->view('HomeView', $data);//directs and passes data from the databse to the view
    }
    
} 