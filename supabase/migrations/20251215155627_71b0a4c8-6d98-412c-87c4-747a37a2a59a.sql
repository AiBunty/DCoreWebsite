-- Create demo_bookings table
CREATE TABLE public.demo_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  business_type TEXT,
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.demo_bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public booking form)
CREATE POLICY "Anyone can create bookings"
ON public.demo_bookings
FOR INSERT
WITH CHECK (true);

-- Allow anyone to check for existing bookings (to prevent double-booking)
CREATE POLICY "Anyone can view bookings for availability check"
ON public.demo_bookings
FOR SELECT
USING (true);