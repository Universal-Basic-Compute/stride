import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { content, firstName, lastName, attachments = [], images = [], mode = null, specialist = null } = await request.json();
    
    console.log(`Sending message to KinOS for user: ${firstName} ${lastName}${mode ? `, mode: ${mode}` : ''}${specialist ? `, specialist: ${specialist}` : ''}`);
    
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
    
    console.log(`Using API endpoint: ${baseUrl}`);
    
    // Create the request body
    const requestBody: any = {
      content,
      attachments,
      images,
      model: "claude-3-7-sonnet-latest", // Add the specified model
      history_length: 50 // Add the specified history length
    };
    
    // Add mode if it exists
    if (mode) {
      requestBody.mode = mode;
    }
    
    // Add specialist if it exists
    if (specialist) {
      requestBody.specialist = specialist;
    }
    
    // Forward the request to the appropriate API with the additional parameters
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any required API keys or authentication headers here
      },
      body: JSON.stringify(requestBody),
    });

    // Check if the response is OK
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`KinOS API error (${response.status}): ${errorText}`);
      throw new Error(`KinOS API returned status ${response.status}`);
    }

    // Get the response from KinOS API
    const data = await response.json();
    console.log('KinOS API response:', data);
    
    // Return the response to the client
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error proxying request to KinOS:', error);
    
    // Return a more detailed error response
    return NextResponse.json(
      { 
        error: 'Failed to communicate with KinOS API',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
