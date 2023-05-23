package com.example.fb_project.entity.enums;

public enum DeliveryType {

    STANDARD("STANDARD"),

    EXPRESS("EXPRESS"),
    NEXT_DAY("NEXT_DAY"),
    SAME_DAY("SAME_DAY");

    private final String value;

    DeliveryType(String value) {
        this.value = value;
    }
    public String getValue() {
        return value;
    }

}
