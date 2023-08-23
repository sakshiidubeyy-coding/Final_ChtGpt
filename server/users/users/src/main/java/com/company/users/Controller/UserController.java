package com.company.users.Controller;
import com.company.users.Model.User;
import com.company.users.Services.UserServices;
import com.company.users.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserServices userServices;
    @RequestMapping(method = RequestMethod.GET,value = "/users")
    public List<User> getAllUsers() {
        return userServices.getAllUsers();
    }
    @RequestMapping(method = RequestMethod.POST,value = "/users")
    public User createUser(@RequestBody User user){
        return userServices.createUser(user);
    }
}
