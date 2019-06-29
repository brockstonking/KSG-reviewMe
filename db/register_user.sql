insert into program_users (username, email, password, business_id, first_name, last_name )
values ($1, $2, $3, $4, $5, $6)
returning *;