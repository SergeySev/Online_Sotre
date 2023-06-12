package com.example.fb_project.entity.enums;

public enum MadeCountry {

    GERMANY("GERMANY"),

    USA("USA"),
    POLAND("POLAND");

    private final String value;

    MadeCountry(String value) {
        this.value = value;
    }
    public String getValue() {
        return value;
    }

}
