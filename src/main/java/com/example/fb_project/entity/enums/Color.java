package com.example.fb_project.entity.enums;

public enum Color {
    RED("RED"),
    BLUE("BLUE"),
    GREEN("GREEN"),
    YELLOW("YELLOW"),
    BLACK("BLACK"),
    WHITE("WHITE");

    private final String value;

    Color(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
