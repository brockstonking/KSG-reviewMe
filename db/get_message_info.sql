SELECT *
FROM program_users p_u
JOIN businesses bu ON bu.business_id = p_u.business_id
JOIN google_listings g_l ON g_l.business_id = bu.business_id
JOIN locations lo on lo.google_listing_id = g_l.google_listing_id
JOIN images im on im.location_id = lo.location_id
where lo.location_id = $1 and im.selected = 'true';