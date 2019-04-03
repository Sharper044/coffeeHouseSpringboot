/* 
**	This is the entrypoint for the backend for coffee-house. 
**  It is a java springboot application. 
**  The archatecture is ment to match this article: https://www.callicoder.com/spring-boot-jpa-hibernate-postgresql-restful-crud-api-example/
**	Its purpose is to serve as a REST API and to provide the neccisary data for the front end.
**  To connect it to Okta I reccomend the following tutorial: https://developer.okta.com/blog/2017/12/06/bootiful-development-with-spring-boot-and-react
**  One issue will be syncing the user table in the database and okta with azure AD.
**  Need to get the connection to an AWS instance of postgress to work. The connection details need to be put in the server/src/main/resources/templates/application.properties file.
**
**  Other helpful resorces include:
**		- https://medium.com/the-code-review/top-10-docker-commands-you-cant-live-without-54fb6377f481
**		- https://docs.docker.com/engine/reference/commandline/docker/
**		- https://overstock.udemy.com/docker-and-kubernetes-the-complete-guide/learn/lecture/11437282#overview
**		- https://overstock.udemy.com/aws-serverless-a-complete-introduction/learn/lecture/7275232#overview
**		- https://overstock.udemy.com/restful-web-service-with-spring-boot-jpa-and-mysql/learn/lecture/9798070#content
**		- https://overstock.udemy.com/deploy-java-spring-apps-online/learn/lecture/9692070#overview
**		- https://medium.com/@lvthillo/connect-from-local-machine-to-postgresql-docker-container-f785f00461a7
**		- https://hub.docker.com/_/postgres
**		- http://zetcode.com/springboot/postgresql/
**		- https://medium.com/@ryanzhou7/running-spring-boot-on-amazon-web-services-for-free-f3b0aeec809
**		- https://aws.amazon.com/microservices/
**		- https://us-west-1.console.aws.amazon.com/rds/home?region=us-west-1#GettingStarted:
**		- https://spring.io/blog/2015/07/14/microservices-with-spring
*/


package com.rest_api.coffee_house;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CoffeeHouseApplication {

	public static void main(String[] args) {
		SpringApplication.run(CoffeeHouseApplication.class, args);
	}

}
