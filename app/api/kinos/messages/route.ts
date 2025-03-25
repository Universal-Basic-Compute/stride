import { NextRequest, NextResponse } from 'next/server';

export const config = {
  maxDuration: 60 // 60 seconds
};

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const firstName = searchParams.get('firstName');
    const lastName = searchParams.get('lastName');
    const since = searchParams.get('since'); // Optional timestamp
    const specialist = searchParams.get('specialist') || 'generalist'; // Get specialist parameter with default
    
    if (!firstName || !lastName) {
      return NextResponse.json(
        { error: 'Missing required parameters: firstName, lastName' },
        { status: 400 }
      );
    }
    
    // Create the project ID by combining firstName and lastName
    const projectId = `${firstName}${lastName}`;
    
    // Determine the base URL based on environment and specialist
    let baseUrl;
    
    // Use different project path based on specialist type
    if (specialist === 'executive') {
      // For executive coach specialist
      baseUrl = process.env.KINOS_API_URL 
        ? `${process.env.KINOS_API_URL}/projects/strideexecutive/${projectId}/messages`
        : process.env.NODE_ENV === 'development'
          ? `http://localhost:5000/projects/strideexecutive/${projectId}/messages`
          : `https://api.kinos-engine.ai/projects/strideexecutive/${projectId}/messages`;
    } else if (specialist === 'entrepreneur') {
      // For entrepreneur coach specialist
      baseUrl = process.env.KINOS_API_URL 
        ? `${process.env.KINOS_API_URL}/projects/strideentrepreneur/${projectId}/messages`
        : process.env.NODE_ENV === 'development'
          ? `http://localhost:5000/projects/strideentrepreneur/${projectId}/messages`
          : `https://api.kinos-engine.ai/projects/strideentrepreneur/${projectId}/messages`;
    } else if (specialist === 'women') {
      // For women's leadership coach specialist
      baseUrl = process.env.KINOS_API_URL 
        ? `${process.env.KINOS_API_URL}/projects/stridewomen/${projectId}/messages`
        : process.env.NODE_ENV === 'development'
          ? `http://localhost:5000/projects/stridewomen/${projectId}/messages`
          : `https://api.kinos-engine.ai/projects/stridewomen/${projectId}/messages`;
    } else {
      // For generalist (default)
      baseUrl = process.env.KINOS_API_URL 
        ? `${process.env.KINOS_API_URL}/projects/stride/${projectId}/messages`
        : process.env.NODE_ENV === 'development'
          ? `http://localhost:5000/projects/stride/${projectId}/messages`
          : `https://api.kinos-engine.ai/projects/stride/${projectId}/messages`;
    }
    
    console.log(`Using API endpoint for messages: ${baseUrl}`);
    
    // Add since parameter if provided
    if (since) {
      baseUrl += `?since=${encodeURIComponent(since)}`;
    }
    
    // Call the KinOS API to get messages
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 second timeout
    
    const response = await fetch(baseUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any required API keys or authentication headers here
      },
      signal: controller.signal
    });
    
    clearTimeout(timeoutId); // Clear the timeout if the request completes
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`KinOS API error (${response.status}): ${errorText}`);
      return NextResponse.json(
        { error: `Failed to fetch messages: ${response.status}` },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching messages from KinOS:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}
