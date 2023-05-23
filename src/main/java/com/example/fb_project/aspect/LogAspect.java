package com.example.fb_project.aspect;

import com.example.fb_project.FbProjectApplication;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

@Aspect
@Component
@Slf4j
public class LogAspect {

    Logger logger = LoggerFactory.getLogger(FbProjectApplication.class);

    @Pointcut("execution(public * com.example.fb_project.controller.*.*(..))")
    public void methodExecuting() {
    }

    /**
     * Executes before the controller method is invoked.
     * Logs information about the incoming request.
     *
     * @param jp The join point representing the controller method.
     */
    @Before("methodExecuting()")
    public void doBeforeController(JoinPoint jp) {
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        assert attributes != null;
        HttpServletRequest request = attributes.getRequest();

        // Получение информации о методе
        String declaringTypeName = jp.getSignature().getDeclaringTypeName();
        String methodName = jp.getSignature().getName();

        // Получение аргументов метода
        Object[] args = jp.getArgs();

        StringBuilder logMessage = new StringBuilder();
        logMessage.append("NEW REQUEST:\n");
        logMessage.append("IP: ").append(request.getRemoteAddr()).append("\n");
        logMessage.append("URL: ").append(request.getRequestURL().toString()).append("\n");
        logMessage.append("HTTP_METHOD: ").append(request.getMethod()).append("\n");
        logMessage.append("CONTROLLER_METHOD: ").append(declaringTypeName).append(".").append(methodName).append("\n");


        // Добавление значений аргументов в сообщение логирования
        for (int i = 0; i < args.length; i++) {
            logMessage.append("ARGUMENT ").append(i).append(": ").append(args[i]).append("\n");
        }
        log.info(logMessage.toString());
    }


    /**
     * This method is executed after the successful execution of any method annotated with the custom @methodExecuting annotation.
     * It records the successful execution of the method, along with its return value (if any) and the class it belongs to,
     * in the log file.
     *
     * @param joinPoint      the join point representing the point at which the method was executed
     * @param returningValue the return value of the method
     */
    @AfterReturning(value = "methodExecuting()", returning = "returningValue")
    public void recordSuccessfulExecution(JoinPoint joinPoint, Object returningValue) {
        String info;
        if (returningValue != null) {
            info = String.format("\nMethod %s, from Class %s, successfully called with return value: %s\n",
                    joinPoint.getSignature().getName(),
                    joinPoint.getSourceLocation().getWithinType().getName(),
                    returningValue);
        } else {
            info = String.format("\nMethod %s, from Class %s, successfully called\n",
                    joinPoint.getSignature().getName(),
                    joinPoint.getSourceLocation().getWithinType().getName());
        }
        logger.info(info);
    }

    /**
     * An aspect that logs information about the failed execution of a method.
     * This method is executed when any exception is thrown from a method with the pointcut expression "methodExecuting()".
     * The method logs information about the failed execution of the method, including the method name, the class name, and the exception message.
     *
     * @param joinPoint the join point at which the exception was thrown
     */
    @AfterThrowing(value = "methodExecuting()", throwing = "exception")
    public void recordFailedExecution(JoinPoint joinPoint, Exception exception) {
        String error = String.format("\nMethod %s, from Class %s, throw an error: %s\n",
                joinPoint.getSignature().getName(),
                joinPoint.getClass().getName(),
                exception);
        logger.error(error);
    }

}
