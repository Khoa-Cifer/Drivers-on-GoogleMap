package com.cifer.app.backend.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ImageService {

    public String uploadImageToFileSystem(MultipartFile file) throws IOException;

    public byte[] getImageFromFileSystem(Long id) throws IOException;

    public String updateImageInFileSystem(String fileName, MultipartFile file) throws IOException;

    public int getTotalImageInFileSystem();

    public List<String> getDuplicatedImageInFileSystem();
}
