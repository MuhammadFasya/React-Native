export type Destination = {
  id?: string;
  title: string;
  country: string;
  rating: number;
  price: string;
  description?: string;
  imageUrl?: string;
};

const BASE_URL = 'https://690376add0f10a340b2467bc.mockapi.io';

function normalizeUnsplashPageToImage(url?: string, w = 800) {
  if (!url) return undefined;
  try {
    // if already a direct image host, return as-is
    if (url.includes('images.unsplash.com') || url.match(/\.(jpg|jpeg|png)$/i))
      return url;
    // try extract last segment (slug or id)
    const seg = url.split('/').filter(Boolean).pop() || '';
    // id usually after last hyphen or the whole segment
    const id = seg.includes('-') ? seg.split('-').pop() : seg;
    if (!id) return url;
    return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
  } catch {
    return url;
  }
}

export async function getDestinations(): Promise<Destination[]> {
  const res = await fetch(`${BASE_URL}/destination`);
  if (!res.ok) throw new Error(`Failed to fetch destinations (${res.status})`);
  const data: Destination[] = await res.json();
  // ensure imageUrl normalized for Image component
  return data.map(d => ({
    ...d,
    imageUrl: normalizeUnsplashPageToImage(d.imageUrl),
  }));
}

export async function getDestination(id: string): Promise<Destination> {
  const res = await fetch(`${BASE_URL}/destination/${id}`);
  if (!res.ok)
    throw new Error(`Failed to fetch destination ${id} (${res.status})`);
  const d: Destination = await res.json();
  d.imageUrl = normalizeUnsplashPageToImage(d.imageUrl);
  return d;
}
