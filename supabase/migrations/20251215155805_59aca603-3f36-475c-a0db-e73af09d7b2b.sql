-- Allow updates to demo_bookings (for admin to change status)
CREATE POLICY "Anyone can update bookings"
ON public.demo_bookings
FOR UPDATE
USING (true)
WITH CHECK (true);