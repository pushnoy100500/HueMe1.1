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
class Posts extends CI_Controller {
    //put your code here
    public function index(){
        $this->load->model('posts_model');//Loads the model
        $data['topPosts'] = $this->posts_model->getPosts(4);//executes function from model returns rexcord set
        sleep(2);
        $this->load->view('posts_view', $data);//directs and passes data from the databse to the view
    }

}
