SELECT *
FROM program_users p_u
JOIN businesses bu ON bu.business_id = p_u.business_id
JOIN google_listings g_l ON g_l.business_id = bu.business_id
JOIN locations lo on lo.google_listing_id = g_l.google_listing_id
where p_u.username = $1 and p_u.password = $2 and lo.primary_location = 'true'