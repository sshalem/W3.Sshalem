import { Anchor, MainChildArea } from "../../../../../components";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import { JavaHighlight } from "../../../../../components/Highlight";
import { useMemo } from "react";

const O6_Service = ({ anchor }: { anchor: string }) => {
  // 1. I Memoize Syntax Highlighter , for better perfromance
  // 2. This fixes , the DropDown issue I have , when I click the Show/Hide content
  const renderUserServiceImpl = useMemo(() => <JavaHighlight javaCode={user_service_impl} />, [user_service_impl]);
  const renderRoleServiceImpl = useMemo(() => <JavaHighlight javaCode={role_service_impl} />, [role_service_impl]);

  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 GitHub link</p>
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨{" "}
            <Anchor
              description="Spring boot Version v2.6.11 - service"
              href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O2-jwt-authorities-v2-6-11/src/main/java/com/O2/service"
            ></Anchor>{" "}
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 Entity</p>
        <article>
          I have 2 Service classes in the service layer
          <ULdisc>
            <Li>UserService (UserServiceImpl)</Li>
            <Li>RoleService (RoleServiceImpl)</Li>
          </ULdisc>
        </article>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 UserServiceImpl</p>
        {renderUserServiceImpl}
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 RoleServiceImpl</p>
        {renderRoleServiceImpl}
      </section>
    </MainChildArea>
  );
};

export default O6_Service;

const user_service_impl = `package com.O2.service;

import java.util.List;
import java.util.UUID;

import com.O2.entity.UserEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.O2.entity.RoleEntity;
import com.O2.exceptions.EmailAlreadyExistException;
import com.O2.exceptions.ResourceNotFoundException;
import com.O2.model.UserRegisterRequest;
import com.O2.model.UserRegisterResponse;
import com.O2.repository.RoleRepository;
import com.O2.repository.UserRepository;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImpl implements UserService {

	private final static Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	/***********************
	 * CREATE
	 ***********************/
	@Override
	@Transactional
	public UserRegisterResponse createUser(UserRegisterRequest userRegisterRequest) {

		UserEntity userEntity = new UserEntity();
		BeanUtils.copyProperties(userRegisterRequest, userEntity);

		if (userRepository.findByEmail(userEntity.getEmail()) != null)
			throw new EmailAlreadyExistException("Email Already Exist");

		userEntity.setPassword(passwordEncoder.encode(userRegisterRequest.getPassword()));

		UserEntity createdUser = userRepository.save(userEntity);

		UserRegisterResponse userRegisterResponse = new UserRegisterResponse();
		BeanUtils.copyProperties(createdUser, userRegisterResponse);

		userRegisterResponse.setId(UUID.randomUUID());

		return userRegisterResponse;
	}

	/****************
	 * Read
	 ***************/

	@Override
	public String getUserName(String email) {
		UserEntity userEntity = userRepository.findByEmail(email);
		return userEntity.getName();
	}

	@Override
	public List<UserEntity> getUserByName(String name) {
		List<UserEntity> _users = userRepository.findByName(name);
		
		if (_users.isEmpty())
			throw new ResourceNotFoundException("User with name : " + name + " , Not Exist");
		return _users;
	}

	@Override
	@Transactional
	public UserEntity getUserByEmail(String email) {
		LOGGER.info("invoke getUserByEmail()");

		UserEntity _userEntity = userRepository.findByEmail(email);

		if (_userEntity == null)
			throw new ResourceNotFoundException("User with Email : " + email + " , Not Exist");
		return _userEntity;
	}

	@Override
	public List<UserEntity> getUsersWithRole(String role) {
		return userRepository.jpqlFindUsersWithRole(role);
	}

	@Override
	public List<RoleEntity> getAllRolesOfUserByEmail(String email) {
		return userRepository.jpqlFindAllRolesOfUserByEmail(email);
	}

	@Override
	public List<UserEntity> getAllUsers() {
		return userRepository.findAll();
	}

	/****************
	 * Update
	 ***************/

	@Override
	@Transactional
	public UserEntity updateUserDetails(String email, UserEntity userEntity) {
		UserEntity _userEntity = this.getUserByEmail(email);
		_userEntity.setName(userEntity.getName());
		_userEntity.setEmail(userEntity.getEmail());
		_userEntity.setPassword(userEntity.getPassword());
		return userRepository.save(_userEntity);
	}

	/****************
	 * Delete
	 ***************/

	@Override
	@Transactional
	public void deleteUserByEmail(String email) {
		UserEntity _userEntity = this.getUserByEmail(email);
		userRepository.delete(_userEntity);
	}

	@Override
	@Transactional
	public void removeAllUsersFromRole(String role) {
		List<UserEntity> _users = userRepository.jpqlFindUsersWithRole(role);
		RoleEntity roleEntity = roleRepository.findByRole(role);

		for (UserEntity _userEntity : _users) {
			_userEntity.removeRole(roleEntity);
			userRepository.save(_userEntity);
		}
	}

	@Override
	@Transactional
	public void deleteAllUsers() {
		userRepository.deleteAll();
	}
}`;

const role_service_impl = `package com.O2.service;

import java.util.List;
import java.util.Set;

import com.O2.entity.UserEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import com.O2.entity.RoleEntity;
import com.O2.exceptions.ResourceNotFoundException;
import com.O2.repository.RoleRepository;
import com.O2.repository.UserRepository;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RoleServiceImpl implements RoleService {

	private final static Logger LOGGER = LoggerFactory.getLogger(RoleServiceImpl.class);

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private UserRepository userRepository;

	/***********************
	 * CREATE
	 ***********************/
	@Override
	@Transactional
	public RoleEntity createRole(RoleEntity roleEntity) {
		LOGGER.info("invoke createRole() ");

		RoleEntity _roleEntityByRole = roleRepository.findByRole(roleEntity.getRole());

		if (_roleEntityByRole != null)
			throw new DuplicateKeyException("Role with name : " + roleEntity.getRole() + " , already Exist");
		return roleRepository.save(roleEntity);
	}

	/****************
	 * GET
	 ***************/

	@Override
	public RoleEntity getRoleByRolename(String role) {
		RoleEntity _roleEntity = roleRepository.findByRole(role);

		if (_roleEntity == null)
			throw new ResourceNotFoundException("Role : " + role + " , NOT Exist");
		return _roleEntity;
	}

	@Override
	public List<RoleEntity> gettAllRoles() {
		return roleRepository.findAll();
	}

	@Override
	public List<UserEntity> getUsersWhoHasRole(String role) {
		List<UserEntity> _users = roleRepository.jpqlFindUsersWithRole(role);
		return _users;
	}

	/****************
	 * Update
	 ***************/

	@Override
	@Transactional
	public RoleEntity updateRoleDetails(RoleEntity roleEntity) {
		RoleEntity _roleEntity = roleRepository.findByRole(roleEntity.getRole());

		if (_roleEntity == null)
			throw new ResourceNotFoundException(" Role " + roleEntity.getRole() + " Not Found");

		_roleEntity.setRole(roleEntity.getRole());

		return roleRepository.save(_roleEntity);
	}

	@Override
	@Transactional
	public UserEntity addRoleToUser(String email, String role) {
		UserEntity _userEntity = userRepository.findByEmail(email);

		if (_userEntity == null)
			throw new NullPointerException("User with Email : " + email + " , Not Exist");

		RoleEntity _roleEntity = roleRepository.findByRole(role);
		
		if(_roleEntity == null)	
			throw new ResourceNotFoundException("Role : " + role + " Not Exist");

		boolean contains = _userEntity.getRoles().contains(_roleEntity);

		if (contains)
			throw new DuplicateKeyException("User already has role: " + role);

		_userEntity.addRole(_roleEntity);
		UserEntity returnedValue = userRepository.save(_userEntity);
		return returnedValue;
	}

	/****************
	 * Delete
	 ***************/
	@Override
	@Transactional
	public void deleteRoleByRoleName(String role) {

		List<UserEntity> _users = userRepository.findAll();
		RoleEntity _roleEntity = roleRepository.findByRole(role);

		for (UserEntity userEntity : _users) {
			boolean contains = userEntity.getRoles().contains(_roleEntity);
			if (contains) {
				userEntity.removeRole(_roleEntity);
				userRepository.save(userEntity);
			}
		}
		roleRepository.delete(_roleEntity);
	}

	@Override
	@Transactional
	public UserEntity removeRoleFromUserByRoleName(String email, String role) {
		UserEntity _userEntity = userRepository.findByEmail(email);

		if (_userEntity == null)
			throw new NullPointerException("User with Email: " + email + " , Not Exist");

		RoleEntity _roleEntity = roleRepository.findByRole(role);
		_userEntity.removeRole(_roleEntity);
		return userRepository.save(_userEntity);
	}

	@Override
	@Transactional
	public Set<RoleEntity> removeAllRolesFromUser(String email) {
		List<RoleEntity> _roles = roleRepository.jpqlFindRolesOfUserByEmail(email);

		UserEntity _userEntity = userRepository.findByEmail(email);

		for (RoleEntity roleEntity : _roles) {
			_userEntity.removeRole(roleEntity);
			userRepository.save(_userEntity);
		}
		return _userEntity.getRoles();
	}

	@Override
	@Transactional
	public void deleteAllRoles() {
		List<RoleEntity> _roles = roleRepository.findAll();

		List<UserEntity> _users = userRepository.findAll();

		for (RoleEntity roleEntity : _roles) {
			for (UserEntity userEntity : _users) {
				userEntity.removeRole(roleEntity);
				userRepository.save(userEntity);
			}
		}
		roleRepository.deleteAll();
	}
}`;
