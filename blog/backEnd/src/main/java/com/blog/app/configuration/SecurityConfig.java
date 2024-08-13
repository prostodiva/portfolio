package com.blog.app.configuration;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@AllArgsConstructor
@NoArgsConstructor
public class SecurityConfig {

    @Autowired
    PasswordEncoder passwordEncoder;
    @Bean
    BCryptPasswordEncoder passwordEncoder()
    {
        return new BCryptPasswordEncoder();
    }

//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        http
//                .csrf(csrf -> csrf.disable())
//                .authorizeHttpRequests((authorizeHttpRequests) ->
//                        authorizeHttpRequests
//                                .requestMatchers("/**").hasRole("ADMIN")
//                                .requestMatchers("/delete/*/user").hasRole("ADMIN") //* - any symbol {uuid}
//                                .requestMatchers("/create/user").hasAnyRole("ADMIN", "USER")
//                                .requestMatchers(HttpMethod.GET).permitAll()
//                                .anyRequest().authenticated())
//                .httpBasic(Customizer.withDefaults()) //using basic authentification
//                .sessionManagement(Customizer.withDefaults());
//
//        return http.build();
//    }


    @Bean
    public UserDetailsService users() {
        UserDetails admin = User.builder()
                .username("admin")
                .password(passwordEncoder.encode("admin-pass")) // saving hash password
                .roles("ADMIN")
                .build();

        UserDetails user = User.builder()
                .username("user")
                .password(passwordEncoder.encode("user-pass")) // saving hash password
                .roles("USER")
                .build();
        return new InMemoryUserDetailsManager(admin, user);
    }


}
