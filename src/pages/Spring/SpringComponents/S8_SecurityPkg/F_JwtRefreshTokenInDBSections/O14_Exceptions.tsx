/*


*/
import { Anchor, MainChildArea } from "../../../../../components";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import { JavaHighlight, SpanGrey } from "../../../../../components/Highlight";
import { useMemo } from "react";

const O14_Exceptions = ({ anchor }: { anchor: string }) => {
  // 1. I Memoize Syntax Highlighter , for better perfromance
  // 2. This fixes , the DropDown issue I have , when I click the Show/Hide content
  const renderControllerAdvice = useMemo(() => <JavaHighlight javaCode={controller_advice} />, [controller_advice]);
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 GitHub link</p>
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨{" "}
            <Anchor
              description="O4-jwt-refresh-token-DB - exceptions"
              href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O4-jwt-refresh-token-DB/src/main/java/com/backend/exceptions"
            ></Anchor>
          </Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <p className="font-semibold">
          🔑 <SpanGrey>Controller Advice</SpanGrey> code
        </p>
        {renderControllerAdvice}
      </section>
    </MainChildArea>
  );
};

export default O14_Exceptions;

const controller_advice = `package com.backend.exceptions;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

@RestControllerAdvice
public class ControllerExceptionHandler {

	private String getCurrentTimestamp() {
		ZonedDateTime now = ZonedDateTime.now(ZoneId.of("Asia/Jerusalem")); // or systemDefault()
		return now.format(DateTimeFormatter.ofPattern("yyyy-MM-dd  HH:mm:ss z"));
	}

	@ExceptionHandler(EmailAlreadyExistException.class)
	public ResponseEntity<Object> emailAlreadyExistException(EmailAlreadyExistException ex, WebRequest request) {

		Map<String, Object> response = new HashMap<>();
		response.put("timestamp", getCurrentTimestamp());
		response.put("statusCode", HttpStatus.CONFLICT.value());
		response.put("error", HttpStatus.valueOf(HttpStatus.CONFLICT.value()).getReasonPhrase());
		response.put("exception", ResourceNotFoundException.class.getName());
		response.put("message", ex.getMessage());
		response.put("uriDescription", request.getDescription(false));
		return new ResponseEntity<>(response, new HttpHeaders(), HttpStatus.NOT_FOUND);

	}

	@ExceptionHandler({ Exception.class })
	public ResponseEntity<Object> globalExceptionHandler(Exception ex, WebRequest request) {

		Map<String, Object> response = new HashMap<>();
		response.put("timestamp", getCurrentTimestamp());
		response.put("statusCode", HttpStatus.INTERNAL_SERVER_ERROR.value());
		response.put("error", HttpStatus.valueOf(HttpStatus.INTERNAL_SERVER_ERROR.value()).getReasonPhrase());
		response.put("exception", ex.getClass().getCanonicalName());
		response.put("message", ex.getMessage());
		response.put("uriDescription", request.getDescription(false));
		return new ResponseEntity<>(response, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
	}
}`;
