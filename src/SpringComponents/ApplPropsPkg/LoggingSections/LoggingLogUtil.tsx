import { ContentAnchor, GitHub, GitHubLiAnchor } from "../../../components";
import { JavaHighlight, Span } from "../../../Highlight";

const LoggingLogUtil = ({ anchor }: { anchor: string }) => {
  return (
    <article className="my-5 scroll-mt-[1.5rem]" id={anchor.replace(/ /g, "")}>
      <ContentAnchor anchor={anchor} />
      <div className="my-4">
        Here is the code, I created for self usage , a <Span>Log class</Span> which all its methods are static.
        <br />
        To use it, I create a <Span>util</Span> package in Spring Boot application , and add this class in it.
        <br />I have several options with this <Span>Log.java</Span>class
      </div>

      <div className="my-4">
        <p className="my-4 inline-block rounded-md bg-teal-500 px-2 py-1 tracking-widest text-white">System.out.println()</p>
        <p>
          Print to console with <Span>System.out.println()</Span> using the following ways:
        </p>
      </div>
      <ul className="list-disc pl-8">
        <li className="my-1">Regular Colors : BLACK , RED, GREEN, YELLOW, BLUE, PURPLE, CYAN, WHITE</li>
        <li className="my-1">Bold ,Underline , High Intensity (bright) , Bold High Intensity (bright)</li>
        <li className="my-1">High Intensity backgrounds</li>
        <li className="my-1">Regular colors , displayed as JSON in console </li>
      </ul>

      <div className="my-4">
        <p className="my-4 inline-block rounded-md bg-teal-500 px-2 py-1 tracking-widest text-white">Logger object</p>
        <p>
          By getting the <Span>Logger</Span> from the used class (see from line <span className="text-red-500">935</span>):
        </p>
      </div>

      <ul className="list-disc pl-8">
        <li className="my-1">Regular Colors : BLACK , RED, GREEN, YELLOW, BLUE, PURPLE, CYAN, WHITE</li>
        <li className="my-1">Bold ,Underline , High Intensity (bright) , Bold High Intensity (bright)</li>
        <li className="my-1">High Intensity backgrounds</li>
        <li className="my-1">Regular colors , displayed as JSON in console </li>
      </ul>
      <GitHub>
        <GitHubLiAnchor
          gitLink={
            "https://github.com/sshalem/Spring-Boot/blob/main/01-Application-Properties-Logging/07_Logging/Log_with_format_object_as_json_in_console.java"
          }
          description={"Git - See Full code of Log file with formating object to be as json in console"}
        ></GitHubLiAnchor>
      </GitHub>

      <p className="my-14" />
      <JavaHighlight javaCode={logUtilCode} />
    </article>
  );
};

export default LoggingLogUtil;

const logUtilCode = `import org.slf4j.Logger;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class Log {

    /**
     * ANSI can refer to the "American National Standards Institute" ANSI Colors
     * code
     * https://stackoverflow.com/questions/67241111/python-colored-text-to-the-terminal
     * <p>
     * https://www.w3schools.blog/ansi-colors-java
     */
//	public final static String ESC_START = "\\033[";
//	public final static String ESC_END = "m";
//	public final static String REGULAR = "0;";
//	public final static String BOLD = "1;";
//	public final static String UNDERLINE = "4;";
    // public final static String BLACK_FG = "30";
//	public final static String RED_FG = "31";
//	public final static String GREEN_FG = "32";
//	public final static String YELLOW_FG = "33";
//	public final static String BLUE_FG = "34";
//	public final static String MAGENTA_FG = "35";
//	public final static String CYAN_FG = "36";
//	public final static String WHITE_FG = "37";
//	public final static String DEFAULT_FG = "39";
    // Reset
    private static final String RESET = "\\033[0m"; // Text Reset
    /**
     * Code with pattern of \\033[X;XXm
     */
    // Regular Colors
    private static final String BLACK = "\\033[0;30m"; // BLACK
    private static final String RED = "\\033[0;31m"; // RED
    private static final String GREEN = "\\033[0;32m"; // GREEN
    private static final String YELLOW = "\\033[0;33m"; // YELLOW
    private static final String BLUE = "\\033[0;34m"; // BLUE
    private static final String PURPLE = "\\033[0;35m"; // PURPLE
    private static final String CYAN = "\\033[0;36m"; // CYAN
    private static final String WHITE = "\\033[0;37m"; // WHITE
    // Bold
    private static final String BLACK_BOLD = "\\033[1;30m"; // BLACK
    private static final String RED_BOLD = "\\033[1;31m"; // RED
    private static final String GREEN_BOLD = "\\033[1;32m"; // GREEN
    private static final String YELLOW_BOLD = "\\033[1;33m"; // YELLOW
    private static final String BLUE_BOLD = "\\033[1;34m"; // BLUE
    private static final String PURPLE_BOLD = "\\033[1;35m"; // PURPLE
    private static final String CYAN_BOLD = "\\033[1;36m"; // CYAN
    private static final String WHITE_BOLD = "\\033[1;37m"; // WHITE
    // Underline
    private static final String BLACK_UNDERLINED = "\\033[4;30m"; // BLACK
    private static final String RED_UNDERLINED = "\\033[4;31m"; // RED
    private static final String GREEN_UNDERLINED = "\\033[4;32m"; // GREEN
    private static final String YELLOW_UNDERLINED = "\\033[4;33m"; // YELLOW
    private static final String BLUE_UNDERLINED = "\\033[4;34m"; // BLUE
    private static final String PURPLE_UNDERLINED = "\\033[4;35m"; // PURPLE
    private static final String CYAN_UNDERLINED = "\\033[4;36m"; // CYAN
    @SuppressWarnings("unused")
    private static final String WHITE_UNDERLINED = "\\033[4;37m"; // WHITE
    // High Intensity
    private static final String BLACK_BRIGHT = "\\033[0;90m"; // BLACK
    private static final String RED_BRIGHT = "\\033[0;91m"; // RED
    private static final String GREEN_BRIGHT = "\\033[0;92m"; // GREEN
    private static final String YELLOW_BRIGHT = "\\033[0;93m"; // YELLOW
    private static final String BLUE_BRIGHT = "\\033[0;94m"; // BLUE
    private static final String PURPLE_BRIGHT = "\\033[0;95m"; // PURPLE
    private static final String CYAN_BRIGHT = "\\033[0;96m"; // CYAN
    private static final String WHITE_BRIGHT = "\\033[0;97m"; // WHITE
    // Bold High Intensity
    private static final String BLACK_BOLD_BRIGHT = "\\033[1;90m"; // BLACK
    private static final String RED_BOLD_BRIGHT = "\\033[1;91m"; // RED
    private static final String GREEN_BOLD_BRIGHT = "\\033[1;92m"; // GREEN
    private static final String YELLOW_BOLD_BRIGHT = "\\033[1;93m";// YELLOW
    private static final String BLUE_BOLD_BRIGHT = "\\033[1;94m"; // BLUE
    private static final String PURPLE_BOLD_BRIGHT = "\\033[1;95m";// PURPLE
    private static final String CYAN_BOLD_BRIGHT = "\\033[1;96m"; // CYAN
    private static final String WHITE_BOLD_BRIGHT = "\\033[1;97m"; // WHITE
    /**
     * Background Colors
     */
    // Background
    private static final String BLACK_BACKGROUND = "\\033[40m"; // BLACK
    private static final String RED_BACKGROUND = "\\033[41m"; // RED
    private static final String GREEN_BACKGROUND = "\\033[42m"; // GREEN
    private static final String YELLOW_BACKGROUND = "\\033[43m"; // YELLOW
    private static final String BLUE_BACKGROUND = "\\033[44m"; // BLUE
    private static final String PURPLE_BACKGROUND = "\\033[45m"; // PURPLE
    private static final String CYAN_BACKGROUND = "\\033[46m"; // CYAN
    private static final String WHITE_BACKGROUND = "\\033[47m"; // WHITE
    // High Intensity backgrounds
    private static final String BLACK_BACKGROUND_BRIGHT = "\\033[0;100m";// BLACK
    private static final String RED_BACKGROUND_BRIGHT = "\\033[0;101m";// RED
    private static final String GREEN_BACKGROUND_BRIGHT = "\\033[0;102m";// GREEN
    private static final String YELLOW_BACKGROUND_BRIGHT = "\\033[0;103m";// YELLOW
    private static final String BLUE_BACKGROUND_BRIGHT = "\\033[0;104m";// BLUE
    private static final String PURPLE_BACKGROUND_BRIGHT = "\\033[0;105m"; // PURPLE
    private static final String CYAN_BACKGROUND_BRIGHT = "\\033[0;106m"; // CYAN
    private static final String WHITE_BACKGROUND_BRIGHT = "\\033[0;107m"; // WHITE

    
    
    /******************
     * Regular colors
     ******************/
    public static void black(Object message) {
        System.out.println(BLACK + message + RESET);
    }

  
    
    /******************************
     * SLF4J Info Logger colors
     ******************************/

    public static void infoRed(Logger LOGGER, Object message) {
        LOGGER.info(RED + message + RESET);
    }

 
    
    /******************
     * Regular colors 
     * But converted to JSON format 
     * And displayed as JSON in console 
     * 
     * (1) create ObjectMapper.
     * To convert POJO to JSON format and show it in console as JSON format 
     * ObjectMapper mapper = new ObjectMapper();
     * 
     * (2) This Convert POJO to  JSON
     * -  Pretty JSON format
     * -  write value as String
     *  String message = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(msg);
     ******************/
    public static void blackJson(Object msg) throws JsonProcessingException {
    	ObjectMapper mapper = new ObjectMapper();
    	String message = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(msg);
        System.out.println(BLACK + message + RESET);
    }

   
    /**
     * In the following methods
     * I show in console the data with the 
     * 'LOGGER' received from the Class itself
     * SLF4J Logger 
     */
        
    public static void errorPurpleJson(Logger LOGGER, Object msg) throws JsonProcessingException {
    	ObjectMapper mapper = new ObjectMapper();
     	String message = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(msg);
        LOGGER.error(PURPLE + message + RESET);
    }    
}`;
