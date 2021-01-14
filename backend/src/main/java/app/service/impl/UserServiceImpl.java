package app.service.impl;

import app.model.User;
import app.repository.UserRepository;
import app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class UserServiceImpl<T extends User> implements UserService<T> {
    
    private final UserRepository<T> userRepository;
    
    @Autowired
    public UserServiceImpl(UserRepository<T> userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public T save(T entity) {
        return userRepository.save(entity);
    }

    @Override
    public Collection<T> read() {
        return userRepository.findAll();
    }

    @Override
    public Optional<T> read(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public boolean existsById(Long id) {
        return userRepository.existsById(id);
    }
}
