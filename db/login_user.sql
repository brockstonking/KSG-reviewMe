select *
from program_users p_u
join businesses bu on bu.business_id = p_u.business_id
join google_listings g_l on g_l.business_id = bu.business_id
where p_u.username = $1 and p_u.password = $2;