<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class test extends CI_Controller {

    function postTest() {
    $mem = json_decode($this->input->post("user"));
    $me = $this->input->input_stream();
    //$user_data['data'] = $this->session->session_id();
        $userSession['data'] = [
            "username" => "somename",
            "sessionid" => $this->session->data,
            "ipaddress" => $_SERVER['REMOTE_ADDR'] //$_SERVER['REMOTE_ADDR']
        ];
$dat['data'] = $_SESSION[];
        //$this->session->set_userdata('');
        $this->load->view('testview', $dat);
    }

}
