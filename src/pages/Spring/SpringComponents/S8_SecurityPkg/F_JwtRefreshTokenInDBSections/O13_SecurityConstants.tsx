/*


*/
import { Anchor, MainChildArea } from "../../../../../components";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";
import { useMemo } from "react";
import { JavaHighlight } from "../../../../../components/Highlight";

const O13_SecurityConstants = ({ anchor }: { anchor: string }) => {
  // 1. I Memoize Syntax Highlighter , for better perfromance
  // 2. This fixes , the DropDown issue I have , when I click the Show/Hide content
  const renderSecurityConstants = useMemo(() => <JavaHighlight javaCode={security_constants} />, [security_constants]);

  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 GitHub link</p>
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨{" "}
            <Anchor
              description="O4-jwt-refresh-token-DB - SecurityConstants"
              href="https://github.com/sshalem/Spring-Boot/blob/main/08-Spring-Security/03_JWT/O4-jwt-refresh-token-DB/src/main/java/com/backend/config/SecurityConstants.java"
            ></Anchor>{" "}
          </Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <p className="font-semibold">
          🔑 <SpanGrey>SecurityConstants</SpanGrey> code
        </p>
        {renderSecurityConstants}
      </section>
    </MainChildArea>
  );
};

export default O13_SecurityConstants;

const security_constants = `package com.backend.config;

// [ms] * [sec] * [min]	
// 1_000 * 60 * 60 = 3_600_000 = 60min 
// 1_000 * 60 * 30 = 1_800_000 = 30min 
// 1_000 * 60 * 1 = 1min
// 1_000 * 5 = 5_000 = 5sec
// 1_000 = 1sec

public class SecurityConstants {

	/******************
	 * JWT AccessToken
	 *****************/
	public static final long JWT_EXPIRATION_TIME_ms = 1_000 * 5;
//	public static final long JWT_EXPIRATION_TIME_ms = 1_000 * 10;
//	public static final long JWT_EXPIRATION_TIME_ms = 1_000 * 200;
//  public static final long JWT_EXPIRATION_TIME_ms = 1_000 * 60 * 15;

	/********************
	 * RefreshToken
	 ********************/
	
//	public static final long REFRESH_TOKEN_EXPIRATION_TIME_ms = 3_600_000;
	public static final long REFRESH_TOKEN_EXPIRATION_TIME_ms = 1_000 * 60 * 60;

	public static final String INVOKED_LOGIN_URL = "loginUrlInvoked";
	public static final String INVOKED_REFRESH_URL = "refreshUrlInvoked";

	/*******************
	 *    General
	 *******************/
	
//  Don't forget to add white space after Bearer prefix
//	public static final String BEARER_PREFIX = "Bearer "; 
	public static final String REFRESH_TOKEN_PREFIX = "Refresh_token "; 
	public static final String AUTHORIZATION = "Authorization";

}
`;
