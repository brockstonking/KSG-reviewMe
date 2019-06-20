select * 
from sent_messages s_m
join locations lo on lo.location_id = s_m.location_id
where lo.business_id = $1
order by s_m.message_id desc;