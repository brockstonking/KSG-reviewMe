select *
from program_users
where username = $1 and password = $2;