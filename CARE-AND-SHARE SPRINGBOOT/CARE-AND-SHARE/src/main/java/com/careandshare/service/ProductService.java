package com.careandshare.service;

import org.springframework.web.multipart.MultipartFile;

import com.careandshare.model.Product;

public interface ProductService {
	
	void addProduct(Product product, MultipartFile productImmage);

}
