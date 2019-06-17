select * 
from sent_messages s_m
join locations lo on lo.location_id = s_m.location_id
join google_listings g_l on lo.google_listing_id = g_l.google_listing_id
where message_id = $1;
